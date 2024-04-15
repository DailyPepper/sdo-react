import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
`

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
`

const Inpt = styled.input`
    display: none;
`

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
`

const Span = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${({ isDragging }) => (isDragging ? '#F5F5F5' : 'transparent')};
    transition: background-color 0.3s ease;
`

const FileUploader = () => {
    const [files, setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.files && e.target.files[0]) {
            setFiles([...e.target.files])
        }
    }

    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragging(true);
    }

    const handleDragLeave = () => {
        setIsDragging(false);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const droppedFiles = [...e.dataTransfer.files];
        if (droppedFiles.length > 0) {
            setFiles(droppedFiles);
        }
    }

    return (
        <Form
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
                    {files.length === 0 ? 'Загрузите файл' : files[0].name}
                </Span>
                <Inpt
                    id="fileInput"
                    type="file"
                    multiple={true}
                    onChange={handleChange}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
            </Label>
            <Button type="submit">
                Отправить на проверку
            </Button>
        </Form>
    );
};

export default FileUploader;
