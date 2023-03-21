import  styled from 'styled-components';


export const MainContainer = styled.div `
   border: 1px solid black;
   height: 100vh;
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;

   

   .title {
    font-size: 3.5rem;
    text-align: center;

    @media screen and (max-width: 820px) {
      font-size: 2.8rem;
    }

    @media screen and (max-width: 371px) {
      font-size: 2.3rem;
    }
   }


   .MainContainer_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
   }

   .MainContainer_item-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4rem;

    @media screen and (max-width: 630px) {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
   }

   .css-1x51dt5-MuiInputBase-input-MuiInput-input  {
      border-bottom: 2px solid #fff !important;
   }

   .css-1pcy96c-MuiButtonBase-root-MuiButton-root {
      height: 2.5rem;
      
   }

`