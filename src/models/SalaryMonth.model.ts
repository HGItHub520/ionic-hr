import { SalaryDetail } from './SalaryDetail.model';

export class SalaryMonth {
    month: string;
    recentMonthSalary: number[];
    details: SalaryDetail[];
}