import { Controller, Get } from '@nestjs/common';
import { ConceptsManualService } from './concepts-manual.service';

@Controller('concepts-manual')
export class ConceptsManualController {

    constructor(private readonly conceptsManualServices: ConceptsManualService) {}

    @Get()
    home(): string {
        return this.conceptsManualServices.home();
    }
}
