// vim: ft=javascript:  ts=3: sw=3: noet:

import validateCardFunction from "./validaciones.js";

class Catalogo {
	constructor () {
		this.data = [
			{
				id: 1,
				nombre: 'La caída del Leviatán',
				genero: 'Ciencia Ficción',
				categoria: 'Libro',
				valoracion: 5,
				completado: true,
				imagen : "img/caida-leviatan.png",
			},
			{
				id: 2,
				nombre: 'Eastward',
				genero: 'Acción-Aventura',
				categoria: 'Videojuego',
				valoracion: 4,
				completado: true,
				imagen : "img/eastward.png",
			},
			{
				id: 3,
				nombre: 'El color de la magia',
				genero: 'Fantasía',
				categoria: 'Libro',
				valoracion: 0,
				completado: false,
				imagen : "img/color-magia.jpg",
			},
			{
				id: 4,
				nombre: 'Dias Extraños',
				genero: 'Cyberpunk',
				categoria: 'Película',
				valoracion: 5,
				completado: true,
				imagen : "img/strange-days.png",
			},
			{
				id: 5,
				nombre: 'CP 2077: Phantom Liberty',
				genero: 'Cyberpunk',
				categoria: 'Videojuego',
				valoracion: 0,
				completado: false,
				imagen : "img/phantom-liberty.png",
			},
		];

		this.nextId = 6;
	}

	getAll () {
		return this.data;
	}

	getEmptyCard () {
		return {
			id: this.nextId,
			nombre: "",
			genero: "",
			categoria: '',
			valoracion: 0,
			completado: false,
			confirmacion: '',
			imagen : "img/default.png",
		};
	}

	validateCard (card) {
		// se sobreescribe con validateCardFunction
	}

	addCard (card) {
		const errores = this.validateCard(card);

		const {confirmacion:no_conf, id:no_id, ...card_data} = card;

		if (errores.length == 0) {
			this.data.push({
				id: this.nextId++,
				...card_data	
			});
		}

		return errores;
	}

	deleteCard (cardId) {
		const index = this.data.findIndex( t => t.id === cardId );

		if ( index > -1 ) {
			this.data.splice(index,1);
		}
	}
};

Catalogo.prototype.validateCard = validateCardFunction;

const cards = new Catalogo();

export default cards;
