import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './feedback.css';

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission, e.g., sending data to the backend
    alert('Thank you for sharing your try!');
    setFeedback('');
    setUploadedFiles([]);
  };

  return (
    <div className="feedback-wrapper">
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Leave your feedback here"
          rows="4"
          className="feedback-textarea"
        ></textarea>
        
        <div className="upload-section">
          <h3>Upload Your Feedback</h3>
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Drag & drop some files here, or click to select files</p>
          </div>
          
          {uploadedFiles.length > 0 && (
            <div className="uploaded-files">
              <h4>Uploaded Files:</h4>
              <ul>
                {uploadedFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
          
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackPage;