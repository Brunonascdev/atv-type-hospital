namespace hospital{
    export abstract class Pessoa {
        private _nome:String;
        private _cpf:String;

        public setNome(nome:String){
            this._nome = nome;
        }

        public getNome(){
            return this._nome;
        }

        public setCpf(cpf:String){
            this._cpf = cpf;
        }

        public getCpf(){
            return this._cpf;
        }
    }
}