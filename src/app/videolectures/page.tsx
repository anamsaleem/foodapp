// pages/classes.js
'use client'
import React, { SetStateAction, useState } from 'react';
 
const classesData = [
  {
    id: 1,
    name: 'Week 1',
    lectures: [
      { id: 1, title: 'Class 1: ', videoUrl: 'https://youtube.com/embed/watch?v=06g6YJ6JCJU' },
      { id: 2, title: 'Class 2: ', videoUrl: 'https://www.youtube.com/embed/watch?v=abc' },
      { id: 3, title: 'Class 3: ', videoUrl: 'https://www.youtube.com/embed/watch?v=xyz' },
      { id: 4, title: 'Class 4: ', videoUrl: 'https://www.youtube.com/embed/watch?v=abc' },
      { id: 5, title: 'Class 5:', videoUrl: 'https://www.youtube.com/embed/watch?v=xyz' },
      { id: 6, title: 'Class 6: ', videoUrl: 'https://www.youtube.com/embed/watch?v=abc' },
    ],
  },
  {
    id: 2,
    name: 'Week 2',
    lectures: [
      { id: 1, title: 'Class 7: Introduction to React', videoUrl: 'https://www.youtube.com/embed/watch?v=06g6YJ6JCJU' },
      { id: 2, title: 'Class 8: State and Props', videoUrl: 'https://www.youtube.com/embed/watch?v=abc' },
      { id: 3, title: 'Class 9: Introduction to React', videoUrl: 'https://www.youtube.com/embed/watch?v=xyz' },
      { id: 4, title: 'Class 10: State and Props', videoUrl: 'https://www.youtube.com/embed/watch?v=abc' },
      { id: 5, title: 'Class 11: Introduction to React', videoUrl: 'https://www.youtube.com/embed/watch?v=xyz' },
    ],
  },
  {
    id: 3,
    name: 'Week  3',
    lectures: [
      { id: 1, title: 'Class 12: HTML and CSS Basics', videoUrl: 'https://www.youtube.com/embed/watch?v=123' },
      { id: 2, title: 'Class 13: JavaScript Fundamentals', videoUrl: 'https://www.youtube.com/embed/watch?v=456' },
      { id: 3, title: 'Class 14: Introduction to React', videoUrl: 'https://www.youtube.com/embed/watch?v=xyz' },
      { id: 4, title: 'Class 15: State and Props', videoUrl: 'https://www.youtube.com/embed/watch?v=abc' },
    ],
  },
];
const ClassesPage = () => {
    const [selectedClass, setSelectedClass] = useState(classesData[0] || {});
  
    const handleClassChange = (classId: number) => {
      const selected = classesData.find((classItem) => classItem.id === classId);
    setSelectedClass(selected || {} as SetStateAction<{ id: number; name: string; lectures: { id: number; title: string; videoUrl: string; }[]; }>);
    };
    return (
        <div className="Classescontainer">
          <h1>Classes</h1>
          <label htmlFor="classDropdown">Select a class: </label>
          <select id="classDropdown" onChange={(e) => handleClassChange(parseInt(e.target.value))}>
            {classesData.map((classItem) => (
              <option key={classItem.id} value={classItem.id}>
                {classItem.name}
              </option>
            ))}
          </select>
    
          <div>
            <h2>{selectedClass.name}</h2>
            <div className="videoContainer">
              {selectedClass.lectures.map((lecture) => (
                <div key={lecture.id} className="videoItem">
                  <strong>{lecture.title}</strong>
                  <br />
                  <iframe
                    width="300"
                    height="169"
                    src={lecture.videoUrl}
                    title={lecture.title}
                    frameBorder="0"
                    allowFullScreen
                    allow='autoplay; encrypted-media'
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default ClassesPage;
    