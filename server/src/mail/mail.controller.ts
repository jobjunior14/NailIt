// import { Controller, Post, Body } from '@nestjs/common';
// import { MailService } from './mail.service';

// @Controller('notifications')
// export class MailController {
//   constructor(private readonly mailService: MailService) {}

//   @Post('sendEmail')
//   async sendEmail(
//     @Body('to') to: string,
//     @Body('subject') subject: string,
//     @Body('text') text: string,
//     @Body('html') html?: string,
//   ) {
//     return await this.mailService.sendMail(to, subject, text, html);
//   }
// }
