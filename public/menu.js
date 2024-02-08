import americanPancakesImg from '../src/assets/breakfast/americanPancakes.jpg'

import saladImg from '../src/assets/courses/salad.jpg'

import coffeeImg from '../src/assets/drinks/coffee.jpg'

const americanPancakes = {
    image: americanPancakesImg,
    name: 'Panquecas americanas',
    price: '18,90',
    description: 'Panquecas americanas perfeitas, servidas com xarope de bordo. Um deleite reconfortante para qualquer hora do dia.'
}

const salad = {
    image: saladImg,
    name: 'Salada',
    price: '22,50',
    description: 'Uma explosão de sabores saudáveis com vegetais frescos, queijos premium e molhos artesanais.'
}

const coffee = {
    image: coffeeImg,
    name: 'Café expresso',
    price: '5,50 (copo pequeno) | R$ 7,90 (copo grande)',
    description: 'Café excepcionalmente preparado com grãos selecionados. Escolha entre copo pequeno ou grande. Uma experiência única a cada gole.'
}

export const breakfasts = [americanPancakes]

export const courses = [salad]

export const drinks = [coffee]