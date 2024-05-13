import React, { useState } from 'react';
import styled from 'styled-components';
import base64 from 'base-64';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
`;

const Button = styled.button`
    width: 1098px;
    height: 75px;
    background-color: #FFFFFF;
    color: #000000;
    cursor: pointer;
    border-radius: 10px;
    border-style: none;
    font-family: 'Montserrat';
    font-size: 16px;

    :hover {
        background-color: #C8D5F6;
        color: #FFFFFF;
        transition: 0.7s;
    }
`;

const Inpt = styled.input`
    display: none;
`;

const Label = styled.label`
    width: 1098px;
    height: 75px;
    background-color: #FFFFFF;
    color: #000000;
    cursor: pointer;
    border-radius: 10px;
    border-style: ${({ isHovered }) => (isHovered ? 'dashed' : 'none')};
    border-width: 2px;
    border-color: ${({ isHovered }) => (isHovered ? '#808080' : 'transparent')};
    transition: border-color 0.3s ease;
    font-family: 'Montserrat';
    font-size: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        border-style: dashed;
        border-width: 2px;
        border-color: #808080;
    }
`;

const Span = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${({ isDragging }) => (isDragging ? '#F5F5F5' : 'transparent')};
    transition: background-color 0.3s ease;
`;

const FileUploader = ({ id }) => {
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [testResults, setTestResults] = useState(null);
    const [testPassed, setTestPassed] = useState(null);
    const [testErrors, setTestErrors] = useState(null);
    const [testLength, setTestLength] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (file === null) {
            setShowAlert(true);
            return;
        }
        setLoading(true);
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = () => {
            const encodedFile = base64.encode(
                String.fromCharCode(...new Uint8Array(reader.result))
            );
            fetch(`http://0.0.0.0:8002/check/1`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ file: encodedFile }),
            })
                .then((response) => response.json())
                .then((data) => {
                    setTestResults(base64.decode(data.test_results));
                    setTestPassed(JSON.stringify(data.test_passed, null, 2));
                    setTestLength(JSON.stringify(data.lengths, null, 2));
                    setTestErrors(base64.decode(data.test_errors));
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                })
                .finally(() => setLoading(false));
        };
    };

    return (
        <Form
            onSubmit={handleSubmit}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <Label
                htmlFor="fileInput"
                isHovered={isHovered}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Span isDragging={isDragging}>
                    {file ? file.name : 'Загрузите файл'}
                </Span>
                <Inpt
                    id="fileInput"
                    type="file"
                    onChange={handleChange}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
            </Label>
            <Button 
                type="submit" 
                onClick={() => {
                    handleSubmit(file);
                  }}
                  loading={loading}
                  variant="contained"
            >
                Отправить на проверку
            </Button>
        </Form>
    );
};

export default FileUploader;
