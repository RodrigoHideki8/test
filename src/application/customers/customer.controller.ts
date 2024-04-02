import {
  Controller,
  Get,
  HttpStatus,
  Inject,
  Query,
  Res,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Observable } from "rxjs";
import { HttpResponseHelper } from "../_shared/helpers/http-response.helper";
import { Response } from "express";
import { HttpResponse } from "../../domain/contracts/presentation-layer/types/types";
import { GetCustomerOutput } from "../../domain/use-cases/Customer/get-customers";
import { GetCustomerUseCase } from "./use-cases/customer.use-case";

@Controller('customers')
@ApiTags('Customers')
export class CustomerController {

  constructor(
    @Inject('GetCustomerUseCase')
    private readonly customerUseCase: GetCustomerUseCase,
  ) {
    this.customerUseCase = customerUseCase;
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Get receiver status.',
  })
  getCustomer(
    @Query('name') name: string,
    @Query('email') email: string,
    @Query('documentValue') documentValue: string,
    @Query('page') page: number,
    @Query('size') size: number,
    @Res() res: Response,
  ): Observable<HttpResponse<GetCustomerOutput>> {
    const getCustomer$ = this.customerUseCase.execute({
      name,
      email,
      documentValue,
      page,
      size,
    });
    return HttpResponseHelper.use(res)
      .makeSimpleHttpResponseTo(getCustomer$)
      .onSuccessDefineStatusAs(HttpStatus.OK)
      .onErrorDefineStatusAs(HttpStatus.NOT_FOUND)
      .build() as Observable<HttpResponse<GetCustomerOutput>>;;
  }
}