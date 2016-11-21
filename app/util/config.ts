export class Config {

    REST_URL_BASE: string = 'http://localhost:8000/api';
    
    URLRegister(): string {
        return this.REST_URL_BASE + '/register';
    }

    URLLogin(): string {
        return this.REST_URL_BASE + '/login';
    }

    URLProfile(idUser: number): string {
        return this.REST_URL_BASE + '/profile/' + idUser;
    }





    URLIndicadores(idIndicador?: number): string {
        let url = this.REST_URL_BASE + '/indicadores'; 
        if (idIndicador) {
             url = url + '/' + idIndicador;
        }
        return url;
    } 

    URLUsuarios(idUsuario?: number): string {
        let url = this.REST_URL_BASE + '/usuarios';
        if (idUsuario) {
            url = url + '/' + idUsuario;
        }
        return url;
    }

    URLMedicoes(idMedicao?: number): string {
        let url = this.REST_URL_BASE + '/medicoes';
        if (idMedicao) {
            url = url + '/' + idMedicao;
        }
        return url;
    }

    URLUsuariosMedicoes(idUsuario: number, idIndicador?: number): string {
        let url = this.REST_URL_BASE + '/usuarios/' + idUsuario + '/medicoes';
        if (idIndicador) {
            url = url + '?id_indicador=' + idIndicador;

            /*
            let dataInicial = new Date('2016-01-01');
            let dataFinal = new Date();

            url = url + '&data_inicial=' + dataInicial.toISOString() + '&data_final=' + dataFinal.toISOString();
            */
        } 
        return url;
    }
}