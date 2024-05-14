# JS

## Tipo de variables

1. String: cadena de valores las cuales tienes métodos como length el cual te indica el número de dígitos existentes en dicha cadena, trim que borra los espacios en blanco al inicio y al final, también puede concatenarse usando "" + "" o `texto ${valor}`

2. Number: valor número en el cual permite también realizar operaciones de + - * / así como también el % que devuelve el resto de una división, también hay que tener en cuenta que cuando utilizamos estos operadores con valores que no son números, se obtinene un NAN


## Operadores
Existe operadores < > e =, también tenemos el == el cual comprara que los valores sean iguales pero su referencia puede ser diferente diferente por ejemplo '1' == 1 da true, pero cuando se utiliza === daría false, porque ahí valida en su totalidad

## Condicionales
Existen diferentes maneras, una es usando la simple se utiliza con un if, else, también existen las múltiples las cuales se definen con if elseif y else, para poder también evitar esto se puede usar switch, existen también la condicional terciaria la que utiliza un : en el cual si un valor es verdadero o falso, hará cierta acción por ejemplo:
```javascript
const value1 = 12 > 3 ? 2 : 5
```
en este caso el valor será de 2