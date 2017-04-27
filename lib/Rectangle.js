"use strict"
var Shape = require("@ull-andrea-carlos/ull-andrea-carlos-shape")
module.exports =  class Rectangle extends Shape{
    constructor(options){
/**
 * Paquete npm de Rectangle
 *
 * https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-andrea-carlos-35l1-p5
 *
 * Autores: Andrea Rodríguez Rivarés y Carlos Castro García
 *
 * Paquete npm con la clase Rectangle
 *
 * @class Rectangle clase rectangle
 * @param {hash} options Ancho y Alto
 */
      super(options);
      this.width = options.width;
      this.height= options.height;
      this.area = 0;

      shape.Rectangle = Rectangle;

      this.constructor = "Rectangle";
    }
/**
* @function calcular
* @return {hash} devuelve el área del rectangulo
*/
    calcular(){
      this.area = this.width * this.height;
      return this.area;
    }
  }
