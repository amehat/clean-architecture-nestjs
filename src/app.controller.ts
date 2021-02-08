import { Controller, Get, Request, Response  } from "@nestjs/common";

@Controller()
export default class AppController {
    @Get()
    getDefault() {
        return {
            page: 'home page'
        };
    }
}
