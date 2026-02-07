import type { Request, Response, NextFunction } from 'express';
import type { CreateUserQueryParams } from '../types/query-params.ts';
import type { User } from '../types/response.ts';
import type { CreateUserDto } from '../types/create-user-dto.ts';

export function getUsers(request: Request, response: Response) {
    response.send([])
}

export function getUsersById(request: Request, response: Response) {
    response.send({})
}

export function createUser(request: Request<{ id: string }, {}, CreateUserDto, CreateUserQueryParams>, response: Response<User>) {
    // console.log(request.params.id);
    // console.log(request.body.email);
    // console.log(request.query.loginAfterCreate);
    response.sendStatus(201).send({ id: 1, email: "abs", username: "abs@abs.com" } as User)
}