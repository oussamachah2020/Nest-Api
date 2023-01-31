import { Body, Controller, Get, Param, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";

@Controller("users")
export class UsersController {
  @Get("users")
  getUsers() {
    return { msg: "oussama", email: "oussama@gmail.com" };
  }

  @Post()
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }

  @Get(":id")
  getUserById(@Param('id') id: string) {
    console.log(id);
    return { id }
  }
}
