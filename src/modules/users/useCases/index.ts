import { UsersRepository } from "../repositories/implementations/UsersRepository";
import { CreateUserController } from "./createUser/CreateUserController";
import { CreateUserUseCase } from "./createUser/CreateUserUseCase";
import { ListAllUsersController } from "./listAllUsers/ListAllUsersController";
import { ListAllUsersUseCase } from "./listAllUsers/ListAllUsersUseCase";
import { ShowUserProfileController } from "./showUserProfile/ShowUserProfileController";
import { ShowUserProfileUseCase } from "./showUserProfile/ShowUserProfileUseCase";
import { TurnUserAdminController } from "./turnUserAdmin/TurnUserAdminController";
import { TurnUserAdminUseCase } from "./turnUserAdmin/TurnUserAdminUseCase";

const usersRepository = UsersRepository.getInstance();

const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

const listAllUsersUseCase = new ListAllUsersUseCase(usersRepository);
const listAllUsersController = new ListAllUsersController(listAllUsersUseCase);

const showUserProfileUseCase = new ShowUserProfileUseCase(usersRepository);
const showUserProfileController = new ShowUserProfileController(
  showUserProfileUseCase
);

const turnUserAdminUseCase = new TurnUserAdminUseCase(usersRepository);
const turnUserAdminController = new TurnUserAdminController(
  turnUserAdminUseCase
);

export {
  createUserController,
  listAllUsersController,
  showUserProfileController,
  turnUserAdminController,
};
