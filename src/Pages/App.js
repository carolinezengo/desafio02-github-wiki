import gitLogo from '../assets/github2.png';
import Input from '../Components/Input';
import ItemRepo from '../Components/ItemRepo';
import { useState } from 'react';
import Button from '../Components/Button';
import {api} from '../services/api'

import { Container } from './styles';


function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [respos, setRepos] = useState([]);

  const handlSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)
     const isExist = respos.find(repo => repo.id === data.id);

    if(data.id)
    {
      if(!isExist)
      {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }
  
    }
    alert('Repositorio não encontrado');
  }

 const handleRemoveRepo = (id) => {
   console.log("removendo", id)

   const isExist = respos.find(repo => repo.id === id);
  
     if(isExist)
     {
      const removeid = respos.filter((num) => num === id);
      console.log("removido ", removeid)
      setRepos(prev => [...prev, removeid]); 
      setCurrentRepo('')
       return ;
     }
  
 
 }


 
 
  return (
    <Container> 
    <img src={gitLogo} width={72} height={72} alt='logo'></img>
     <Input value={currentRepo} onChange={(e) => setCurrentRepo (e.target.value)}/>
     <Button onClick={handlSearchRepo}/>
     
     {respos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
       </Container>
     
    
  );
}

export default App;
