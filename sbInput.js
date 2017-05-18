var miDirectiva = angular.module('SB-Input', []);

var sbInput = function () {

    var directiva = {};

    var restrict = "E";
    var template =
        '<div class="stepper-wrap" style="margin:0px 15px 0px 0px;">'
        + '	<input class="sbInput" placeholder="" type="text" ng-model="value" ng-pattern="regex" /*style="margin:0;padding:0;height:24px"*/ ng-style="{\'background-color\':isValid ? \'white\' : \'red\'}"></input>'
        + '	<div class="stepper-btn-wrap" ng-show="isNumber">'
        + '		<a class="fa fa-caret-up stepper-btn-dwn" ng-click="value = (value*1) + 1"></a>'
        + '		<a class="fa fa-caret-down stepper-btn-up" ng-click="value = (value*1) - 1"></a>'
        + '	</div>'
        + '	<div class="stepper-btn-wrap" ng-show="isPassword" ng-click="showPass()">'
        + '      <a class="stepper-btn-wrap-100" ng-class=" !passVisible ? \'fa fa-eye\' : \'fa fa-eye-slash\'"></a>'
        + '	</div>'
        + '</div>'

    
    var scope = {
        value: "=value",
        mask: "@",
        minvalue: "@",
        maxvalue: "@",
        format: "@",
        isRequired: "@",
        defvalue: "@",
        placeholder: "@"
    };


    var replace = true;
    var link = function (scope, elmn, atrs) {

        scope.isNumber = false;
        scope.isPassword = false;
        scope.regex = '';
        scope.isValid = true;
        scope.passVisible = false;

        scope.$watch('value', function (newValue, oldValue) {
            scope.change();
        }, true);

        var invokeFormat = function () {

            switch (scope.format) {
                case 'email':
                    scope.regex = /^([a-zA-Z0-9])+([a-zA-Z0-9._%+-])+@([a-zA-Z0-9_.-])+\.(([a-zA-Z]){2,6})$/;
                    $(elmn).find('input').attr('type', 'email');
                    break;
                case 'telephone':
                    scope.regex = /^(0|[1-9][0-9]*)$/;
                    break;
                case 'number':
                    scope.regex = /^\-*(0|[1-9][0-9]*)$/;
                    // $(elmn).find('input').attr('type', 'number');
                    scope.isNumber = true;
                    break;
                case 'password':
                    $(elmn).find('input').attr('type', 'password');
                    scope.isPassword = true;
                    break;
                case 'decimal':
                    scope.regex = /^\-*(0|[1-9][0-9]*)(\.*(0|[1-9][0-9]*))*$/;
                    scope.isNumber = true;
                    break;
                default:
                    scope.regex = "";
                    scope.isNumber = false;
                    scope.isPassword = false;
                    break;
            }

        }

        scope.showPass = function () {
            if (scope.passVisible) {
                $(elmn).find('input').attr('type', 'password');
                scope.passVisible = false;
            } else {
                $(elmn).find('input').attr('type', 'text');
                scope.passVisible = true;
            }
        }

        scope.change = function () {

            var patt = new RegExp(scope.regex);
            scope.isValid = patt.test(scope.value);

            if (scope.isNumber) {
                if ((scope.minvalue != typeof (undefined) && scope.value < scope.minvalue * 1)
                    || (scope.maxvalue != typeof (undefined) && scope.value > scope.maxvalue * 1)) {
                    scope.isValid = false;
                }
            }
        }

        var changeMask = function(){
            var auxValue = "";
            var acValue = scope.value;
            var acMask = scope.mask;


            for (i = 0, j=0; i < acMask.length; i++) {
                if(acMask[i]=='_'){
                    auxValue = auxValue + acMask[j];
                    j++;
                }
                else{
                    auxValue = auxValue + acMask[i];
                }

            }

            scope.value = auxValue;
        }
     

        var initializeComponent = function () {
            if (scope.isRequired == undefined) {
                scope.isRequired = false;
            }

            if (scope.placeholder != undefined) {
                $(elmn).find('input').attr('placeholder', scope.placeholder);
            }

            if(scope.mask != undefined && scope.value == ""){
                // scope.value = scope.mask;
            }

            invokeFormat();
            scope.change();
        }

        initializeComponent();
    }

    directiva.restrict = restrict;
    directiva.template = template;
    directiva.scope = scope;
    directiva.replace = replace;
    directiva.link = link;

    return directiva;

}

miDirectiva.directive('sbInput', sbInput);