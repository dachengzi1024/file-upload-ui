import {useState} from 'react';
import instance  from '../../utils/instance';
function TestComponent({
    
}) {
    const [myName, setMyName] = useState('');
    const onClick = async () => {
        const responce = await instance.get("/redis/get", {
            params: {
                key: 'cxm'
            }
        });
        console.log(responce)
        if (responce.code === 200) {
            setMyName(responce.data)
        }
    }
    return (
        <div>
            <button onClick={onClick}>我叫什么</button>
            <span>我叫：{myName}</span>
        </div>
    )
}
export default TestComponent;
