import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; 

const notyf = new Notyf()


export default function MostraMsg(msg,type){

    if (type === false){
        notyf.error(msg)
    }else{
        notyf.success(msg)
    }
}
