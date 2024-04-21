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

    :hover{
        width: 1098px;
        height: 75px;
        background-color: #C8D5F6;
        color: #FFFFFF;
        transition: 0.7s;
        cursor: pointer;
        border-radius: 10px;
        border-style: none;
        font-family: 'Montserrat';
        font-size: 16px;
    }
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

const FileUploader = ({id}) => {
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

    const handleSub = () => {
        alert('Лабораторная успешно отправлена')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (files.length === 0) {
            alert('Выберите файл для отправки');
            return;
        }
        const formData = new FormData();
        formData.append('file', files[0]);
        try {
            const response = await fetch(`http://0.0.0.0:8000/check/${id}`, {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                throw new Error('Ошибка при отправке файла');
            }
            const data = await response.json();
            console.log('Ответ сервера:', data);
        } catch (error) {
            console.error('Ошибка:', error.message);
        }
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
            <Button type="submit" onClick={handleSub}>
                Отправить на проверку
            </Button>
        </Form>
    );
};

export default FileUploader;
