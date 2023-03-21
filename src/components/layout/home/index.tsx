import { MainContainer } from '../home/style';
import MainIMG from '../../../assets/img/icone_icon.png'; 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { api } from '../../../services/api';
import { useEffect, useState } from 'react';
import { TypeUsers } from '../../../interface/GlobalType';
import { TypeMessage } from '../../../interface/GlobalType';
import { theme } from '../../../styles/MuiStyles/MuiStyleTEXTFIELD/muiTheme';
import { themeButton } from '../../../styles/MuiStyles/MuiStyleBUTTON/muiTheme';
import { ThemeProvider } from '@emotion/react';
import {  toast } from 'react-toastify';

export default function(){

    const [access, setAccess] = useState(false)
    const [saveMatricula, setSaveMatricula] = useState<number>() 
    const [users, setUsers] = useState<TypeUsers[]>([])
    const [valueMessage , setValueMessage] = useState<TypeMessage>({
        message: ""
    })

    useEffect(() => {
      const fetchStudents = async() => {
        const url = '/students'
        try{
            const response = await api.get(url)
            return setUsers(response.data.students)
            
        }catch(e){
            console.log(e)
        }
      }
      fetchStudents()
    },[])

   
    function handleClick(){
      if(valueMessage.message === ""){ // verificao de vazio o campo
        return toast.error("Campo vazio")
      } 
      const verificationName = users.find((user) => user.name.toLowerCase() === valueMessage.message.toLowerCase())
      // o find faz com que eu encontre algo em especifico, no caso a cima o name

      if(verificationName){
        toast.success("Matrícula encontrada com sucesso")
        setSaveMatricula(verificationName.matricula)
        setAccess(true)
      } else if (verificationName !== valueMessage.message){ // se o name for diferente da mensagem
        setAccess(false)
        return toast.error("Matrícula não encontrada")
      }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
       setValueMessage({
         message: e.target.value
       })
    }

    
    return (
        <MainContainer>
            <div className='MainContainer_item'>
               <h1 className='title'>Pegue sua Matrícula</h1>
                 <div className='MainContainer_item-item'>
                   <img src={MainIMG} alt="" />
                    <ThemeProvider theme={theme}>
                       <TextField
                        id="outlined-basic"
                        label="Seu nome e sobrenome"
                        onChange={handleChange}
                        autoComplete="off"
                        InputLabelProps={{
                          style: { color: '#fff' }, 
                        }}
                        variant="standard" />
                    </ThemeProvider>
                 </div>
                  <ThemeProvider theme={themeButton}>
                  <Button 
                   onClick={handleClick}
                   style={{ backgroundColor: "transparent" }}
                   variant="contained">Coloque seu nome
                 </Button>
                  </ThemeProvider>
               
                 { access && (
                   <p>Sua matrícula é {saveMatricula}</p>
                  )
                 }
            </div> 
      </MainContainer>
    )
}