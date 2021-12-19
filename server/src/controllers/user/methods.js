import { externalUser } from "../../models";

export const getAllUsers = async () => {
	const todos = await externalUser.find();
	return todos;
};

export const getUserById = async (userId) => {
	const todo = externalUser.findById(userId);
	return todo;
};

export const updateUser = async (userId, payload) => {
	const result = await externalUser.updateOne({ _id: userId }, payload);
	return result;
};

export const deleteUser = async (userId) => {
	const result = await externalUser.deleteOne({ _id: userId });
	return result;
};

//-----------OJO FALTA AGREGARLE FUNCIONALIDAD A LAS FUNCIONES DEBAJO DE ESTO------

//--------------------METODOS PARA CARROS----------------------------------
export const addCar = async (userId, newCar) => {
	const user = await externalUser.findById(userId);
	user.cars.push(newCar);
	user.save();
	return user;
};

export const addGas = async (userId, carPlate, gas) => {
	const user = await externalUser.findById(userId);
	let cars = user.cars;

	console.log("ESTA ES LA PLACA A BUSCAR:: ", carPlate);

	console.log("ESTA ES LA LISTA DE CARROS DEL USER::", cars);
	let carToUpdate;

	for (let i = 0; i < cars.length; i++) {
		if (cars[i].plate === carPlate) carToUpdate = cars[i];
	}

	console.log("ESTE ES EL CARRO A AGREGAR GAS::", carToUpdate);
	let newGas = carToUpdate.gas + gas;
	const result = externalUser.updateOne(
		{ _id: userId },
		{ $set: { carToUpdate: newGas } }
	);
	return result;
};

// export const deleteCar = async (userId) => {};

//--------------------METODOS PARA BALANCE-------------------------
// export const addMoney = async(userId) =>{
// 	const
// }
