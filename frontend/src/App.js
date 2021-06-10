import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import Card from './components/Card'

function App() {
  const [form, setForm] = useState(
    {
      plantName: '', 
      photo: '', 
    });

  const [plants, setPlants] = useState([]);

  const fillForm = (e, field) => {
    let newForm = {
      ...form
    };
    newForm[field] = e.target.value;
    setForm(newForm);
/*     let newForm = {...form};
    if (field === "photo") {
      console.log('file', e.target.files[0])
      newForm.photo = e.target.files[0];
      console.log(newForm);
    } else {
      console.log('plantName', e.target.value)
      newForm.plantName = e.target.value;
    }
    setForm(newForm); */
  }

  useEffect(() => {
    const url ='http://localhost:5000/plants/all';
    axios.get(url).then(res => {console.log(res.data); setPlants(res.data);})
  }, [])

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('plantName', form.plantName);
    formData.append('photo', e.target[1].files[0]);

    const config = {
      headers: {
        'content-type': 'multipart/form-data;'
      }
    }

    const url ='http://localhost:5000/plants/new';

    axios.post(url, formData, config)
    .then(response => { 
      if (response.request.status !== 200) {
        alert('error in post')
      } else {
        setPlants([...plants, response.data])
      }
    }).catch(err => console.log(err))
  }

  let allPlants = plants.map(plant => 
    <Card 
      key={plant._id} 
      plant = {plant}
    />)

  return (
    <div className="App">
      <form onSubmit = {formSubmitHandler}>
        <div>
          <label>Add plant's name:</label>
          <input 
            type="text" 
            required 
            placeholder="Plant's Name" 
            name="plantName" 
            value = {form.plantName} 
            onChange = {(e) => fillForm(e, "plantName")}
          />
        </div>
        <div>
          <label>Add plant's photo:</label>
          <input  
            type="file" 
            accept=".png, .jpg, .jpeg"
            name="photo"
            onChange = {(e) => fillForm(e, "photo")}
          />
        </div>
        <button type="submit">Add plant</button>
      </form>
      <div>
        my plants:
        {allPlants}
      </div>
    </div>
  );
}

export default App;



/*   const formSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('plantName', form.plantName);
    formData.append('photo', form.photo);

    const url = 'http://localhost:5000/plants/new';
    const options = {
      method: 'POST',
      body: formData
    }
    console.log('formData',formData);
    fetch(url, options)
    .then(response => response.json().then(res => {
      if (res.errors) {
        alert(` ${res.message} `);
      } else {
        setPlants([...plants, res])
      }
    })).catch(err => console.log(err))
  } */
