import { Injectable } from "@nestjs/common";

@Injectable()
export class ConceptsManualService {
    home(): string {
        return "Home do conceito de service manual"
    }
}