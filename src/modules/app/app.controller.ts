import { Controller, Get, Request, Response  } from "@nestjs/common";

@Controller()
export default class AppController {
    @Get('/home')
    getDefault() {
        return {
            page: 'home page'
        };
    }
}
