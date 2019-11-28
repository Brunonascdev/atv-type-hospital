namespace hospital{
    export class Medico extends Funcionario {
        private _crm:number;
        private _especialidade:String;

        public setCrm(crm:number){
            this._crm = crm;
        }

        public getCrm(){
            return this._crm;
        }

        public setEspecialidade(especialidade:String){
            this._especialidade = especialidade;
        }

        public getEspecialidade(){
            return this._especialidade;
        }
    }
}