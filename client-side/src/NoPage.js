import React from 'react';

const NoPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <h2 style={styles.subtitle}>Oops! Page Not Found</h2>
      <p style={styles.text}>
        The page you’re looking for doesn’t exist or has been moved. Let’s get you back to safety.
      </p>
      <button style={styles.button} onClick={() => (window.location.href = '/')}>
        Go Back to Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#2c3e50',
    marginTop: '10%',
    padding: '20px',
  },
  title: {
    fontSize: '120px',
    fontWeight: 'bold',
    color: '#e74c3c',
    margin: '0',
  },
  subtitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '10px 0',
    color: '#34495e',
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#7f8c8d',
    marginBottom: '30px',
  },
  button: {
    backgroundColor: '#3498db',
    color: '#fff',
    fontSize: '16px',
    padding: '12px 30px',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#2980b9',
  },
};

// Add hover effect for the button
const button = document.querySelector('button');
if (button) {
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = styles.buttonHover.backgroundColor;
  });
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = styles.button.backgroundColor;
  });
}

export default NoPage;
