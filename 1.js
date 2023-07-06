const temp_cels = parseInt(prompt("введите темпиратуру в цельсиях"));

temp_far = Math.round(((9/5)*temp_cels+32)*100)/ 100
alert(temp_cels +' градус в цельсияз ' + temp_far + ' в фаренгейтах');
