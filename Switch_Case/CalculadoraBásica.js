let Num1 = 20;
let Num2 = 30;

let Operação = 'multiplicação';

switch (Operação){
    case 'soma':
        console.log(`${Num1} + ${Num2} = ${Num1 + Num2}`);
        break;
    case 'subtração':
        console.log(`${Num1} - ${Num2} = ${Num1 - Num2}`);
        break;
    case 'multiplicação':
        console.log(`${Num1} * ${Num2} = ${Num1 * Num2}`);
        break;
    case 'divisão':
        console.log(`${Num1} / ${Num2} = ${Num1 / Num2}`);
        break;
}