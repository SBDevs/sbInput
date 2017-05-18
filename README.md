# sbInput

Directiva de AngularJS que amplia la funcionalidad y compatibilidad del <input></input>.
Esta directiva ha sido creada para que sea 100% compatible con la mayoria de los navegadores (especialmente con IE y Chrome).

NOTA: Esta en una fase inicial y en un futuro esperamos dotarla de mucha más funcionalidad.

### Como empezar

Debe descargar el proyecto donde encontrará todo lo necesario para usar estas directivas.  

### Prerequisito

Para usar sb-input, necesitas implementar AngularJS en su solución web. 
Se hace uso de bootstrap y fontawesome, ya que son ampliamente utilizadas en el desarrollo web. 

## Atributos

Esta directiva contiene los siguientes atributos en su definicion:

| Atributo    | Definición                                                           |
|:-----------:|:--------------------------------------------------------------------:|
| value       | Valor con el que se va a trabajar en el control                      |
| mask        | Mascara para sustitución                                             |
| minvalue    | Valor mínimo permitido (indicado para formatos 'number' y 'decimal') |
| maxvalue    | Valor máximo permitido (indicado para formatos 'number' y 'decimal') | 
| format      | Formatos disponibles para los distintos input                        |
| is-required | Indica si el valor es requerido o no                                 |
| defvalue    | Valor por defecto                                                    |
| placeholder | Texto que se mostrará de fondo cuando no tenga valorº                |

En el caso del atributo format, podremos elegir entre los siguiente:

| Formato        | Definición                        |
|:--------------:|:---------------------------------:|
| Email          | Direcciones de correo electronico |
| Number         | Numeros enteros                   |
| Telephone      | Numeros de telefono               |
| Password       | Contraseñas                       |
| Decimal        | Numeros decimales                 |
| Text (default) | Tipo texto                        |

## Ejemplos

### html

```html
 <div id="CapaDemoDirectivas" ng-controller="CtlDemoDirectivas">
 ...
 </div>
```

```html
<sb-input value="TextSample" format="text" ></sb-input>
<sb-input value="EmailSample" format="email" ></sb-input>
```

```html
<sb-input value="NumberSample" format="number"></sb-input>
<sb-input value="DecimalSample" format="decimal" minvalue="1" maxvalue="5"></sb-input>
```

```html
<sb-input value="PasswordSample" format="password" placeholder="Introduzca su contraseña" is-required="true"></sb-input>
```

### JavaScript 

```javascript
var appDemoDirectivas = angular.module('appDemoDirectivas', ['Directivas']);

var CtlDemoDirectivas = function ($scope) {
	
	$scope.DecimalSample = 0.00;
	$scope.EmailSample="";
    $scope.TextSample = "";
    $scope.PasswordSample = "";
    $scope.NumberSample = 0;
};

CtlDemoDirectivas.$inject = ['$scope'];

appDemoDirectivas.controller('CtlDemoDirectivas', CtlDemoDirectivas);

var CapaDemoDirectivas = document.getElementById('CapaDemoDirectivas');
angular.bootstrap(CapaDemoDirectivas, ['appDemoDirectivas']);

```
Ejemplos en [http://sbcontrols.ml/](http://sbcontrols.ml/) 

## Herramientas utilizadas

  * [AngularJs](https://angularjs.org/)
  * [BootStrap](http://getbootstrap.com/getting-started/)
  * [FontAwesome](http://fontawesome.io/)	
  * [JQuery.Stepper](Luciano Longo)

## Autores

Esta directiva ha sido desarrollado como trabajo para la asignatura SOFTWARE LIBRE Y COMPROMISO SOCIAL de la Universidad de Córdoba.

El desarrollador principal de esta directiva 

```
Manuel David Ruiz Rubio
```

Desarrolladores del resto de directivas sb-controls

```
Verónica Gómez Molina
Eloy Ortiz Pulido
``` 

Especial agradecimiento por sus masterclass en angular

```
Rafael Torres Cabezas
```
