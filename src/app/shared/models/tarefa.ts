import { SubObjetivos } from './SubObjetivos';

export interface Tarefa {
  id: number;
  title: string;
  description?: string;
  dataCriation?: Date;
  type?: string;
  subObjetivos: SubObjetivos[];
}
