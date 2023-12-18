// DownloadPage.tsx
import React from 'react';

const DownloadPage: React.FC = () => {
  return (
    <div className="downloadpage">
      <h1>Download Our App</h1>
      <p>Get the latest version of our app for an amazing experience.</p>
      <a
        href="/path/to/your/app.apk"  // Replace with the actual path to your app
        download="your-app-name.apk"  // Specify the file name for download
      >
        <button>Download Now</button>
      </a>
    </div>
  );
};

export default DownloadPage;
