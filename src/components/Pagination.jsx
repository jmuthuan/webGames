import './Pagination.css';
import { useEffect, useState } from 'react';

const Pagination = (props) => {
    const [actualPage, setActualPage] = useState(1);
    let shortPagination = true;
    const lastPage = Math.ceil(props.count / props.pageSize);   
    let arrayPage = ["Prev"];   

    if (lastPage > 1) {
        if (props.url.includes("page=")) {
           setActualPage(props.url.slice(props.url.indexOf("page=") + 5));          
        }

        if (lastPage > 7) {//long pagination
            shortPagination = false;
            if (actualPage <= 2) {
                arrayPage.push(1, 2, 3, 4, 5, "...", lastPage);
            } else if (actualPage > 2 && actualPage < (lastPage - 4)) {
                arrayPage.push(1, "...", actualPage, actualPage + 1, actualPage + 2, "...", lastPage);
            } else if (actualPage >= lastPage - 4) {
                arrayPage.push(1, "...", lastPage - 4, lastPage - 3, lastPage - 2, lastPage - 1, lastPage);
            }
            arrayPage.push("Next");
        }
        else {//short pagination
            for (let i = 1; i <= lastPage; i++) {
                arrayPage.push(i)
            }
            arrayPage.push("Next");
        }
    }

    const onClickBtnPagination = (name)=>{
        if(!isNaN(name)){
            props.onClickBtnPagination(name);                      
        }
        else if(name ==="Prev"){
           name=actualPage-1;
           props.onClickBtnPagination(name); 
        }else if(name ==="Next"){
            name=actualPage+1;
            props.onClickBtnPagination(name); 
        }
    }

    useEffect(()=>{
        setActualPage(props.urlPage);        
    },[actualPage, props.urlPage])
   

    return (
        <div className="pagination_div">            
            {
                arrayPage.map((name, index) => {
                    return (
                        <button
                            className={`btnPagination 
                                ${(name==="Prev" && actualPage===1)? "btnDisable": ""} 
                                ${(name==="Next" && actualPage===lastPage)? "btnDisable": ""} 
                                ${name==="..."? "dotsButton": ""}
                                `} 
                            style={{fontWeight: `${actualPage===name? "700":"400"}`}}
                            type="button"
                            key={index}
                            onClick={()=>{
                                onClickBtnPagination(name)
                            }}
                            disabled={(name==="Prev" && actualPage===1)?
                                 true:  
                                 (name==="Next" && actualPage===lastPage)? true: false}>
                            {name}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Pagination;