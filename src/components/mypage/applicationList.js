import styled from "styled-components";

const ApplicationList = ({ start, end, state }) => {

    const myDelete = () => {
        const result = window.confirm('삭제하시겠습니까?')
    }  

    return(
        <ListWrapper>
            <Date>{start} ~ {end}</Date>
            <Manage>
                <Modify>수정</Modify>
                <Delete onClick={myDelete}>삭제</Delete>
                <State state={state}>
                    <span>{state}</span>
                </State>
            </Manage>
        </ListWrapper>
    )
}

const ListWrapper = styled.div`
    margin-top: 15px;
    margin-left: 40px;
    width: 600px;
    padding-bottom: 20px;
    border-bottom: 1px solid black;
    margin-bottom: 30px;
`

const Date = styled.p`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
`

const Manage = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    position: relative;
`

const Modify = styled.span`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    margin-left: 15px;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`

const Delete = styled.span`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    margin-left: 15px;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`

const State = styled.span`
    border: ${(props) => {
        if(props.state === "승인"){
            return "0.5px solid #53DC19"
        }
        else if(props.state === "대기"){
            return "0.5px solid #888888"
        }
        else if(props.state === "거절"){
            return "0.5px solid #E03131"
        }
    }};;
    border-radius: 15px;    
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: ${(props) => {
        if(props.state === "승인"){
            return "#53DC19"
        }
        else if(props.state === "대기"){
            return "#888888"
        }
        else if(props.state === "거절"){
            return "#E03131"
        }
    }};
    width: 72px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10px;
    cursor: pointer;
    &:hover{
        background-color: ${(props) => {
            if(props.state === "승인"){
                return "#53DC19"
            }
            else if(props.state === "대기"){
                return "#888888"
            }
            else if(props.state === "거절"){
                return "#E03131"
            }   
        }};
        color: white;
        transform: scale(1.1);
        font-weight: bold;
    }
`

export default ApplicationList;