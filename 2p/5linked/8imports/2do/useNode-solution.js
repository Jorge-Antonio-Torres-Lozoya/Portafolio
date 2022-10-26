/**
 *
 * your solution here
 *
 */

import { LinkedList } from '../../../../jatl/linked/listaEnlazada.js'


let linkedList = new LinkedList()

linkedList.add('Azul')
linkedList.add('Esmeralda')
linkedList.add('Verde')
linkedList.add('Amarillo')
console.log(linkedList.insertBefore('Blanco', 'Amarillo'))
console.log(linkedList.insertAfter('Cafe', 'Verde'))
linkedList.print()
console.log(linkedList.size());

