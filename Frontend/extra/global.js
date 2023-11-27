const ValidarTexto = (texto, num=false) => {
    if(num===false){
        var regex = /^[a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜñÑçÇßẞàÀèÈêÊБВГДбвгджфяΔαβγδεΩあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊ가나다라마바사아자차你好中国书中文谢谢 ]*$/;
    }else{
        var regex = /^[a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜñÑçÇßẞàÀèÈêÊБВГДбвгджфяΔαβγδεΩあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊ가나다라마바사아자차你好中国书中文谢谢 0-9]*$/;
    }
    if(regex.test(texto)){
        return true;
    }else{
        return false;
    }
}

const CompararFechas = (ano, mes, dia, diaSem, hora, minuto) => {
    const fecha = new Date(`${ano}-${mes}-${dia}`);
    const hoy = new Date();
    const dif = Math.floor((hoy-fecha) / (1000 * 60 * 60 * 24));
    if(dif<0){
      return "Error: Resta negativa";
    }else if(dif===0){
      return `${hora}:${minuto}`;
    }else if(dif===1){
      return "Ayer";
    }else if(dif<7){
      return diaSem;
    }else{
      return `${dia<10?"0":""}${dia}/${mes<10?"0":""}${mes}/${ano}`;
    }
  }

export default {ValidarTexto, CompararFechas}