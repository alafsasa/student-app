import { useState } from 'react';
import './App.css';
import { Student, AppName, Level } from './interfaces';
import { studentList, courseList } from './data';
import { DisplayData } from './DisplayData';
import { GenericSort } from './GenericSort';

function App({ name }: AppName) {
  const [student, setStudent] = useState<Student | null>(null);
  const [list, setList] = useState(studentList);
  const addStudent = () => {
    setStudent({
      name: 'George',
      surname: 'Limo',
      age: 20,
      address: {
        houseNo: 1234,
        street: 'habor',
        town: 'Eldoret'
      },
      level: "Undergraduate"
    })
  }
  const sortData = () => {
    GenericSort(studentList, "name");
    setList([...studentList]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h4>Hello World!</h4>
        <h1>{name}</h1>
        <p><b>{student?.name} {student?.surname}</b></p>
        {
          student?.level === Level.Undergraduate && <p><b>Age: {student.age}</b></p>
        }
        <button onClick={addStudent}>Add Student</button>
        <br />
        <button onClick={sortData}>Sort Data</button>
        <div>
          <DisplayData items={list} />
        </div>
        <h3>List of Courses</h3>
        <div>
          <DisplayData items={courseList} />
        </div>
      </header>
    </div>
  );
}

export default App;
