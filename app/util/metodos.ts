export class Metodos {

    formataData(valor:Date): string {
        return valor.toLocaleDateString("pt-br");
    }

    formataHoraMinutos(valor:Date): string {
        let s = valor.toLocaleTimeString("pt-br").split(":"); 
        return s[0] + ":" + s[1];
    }

    formataHoraMinutosSegundos(valor:Date): string {
        return valor.toLocaleTimeString("pt-br");
    }

    converteDataEHora(data:string, hora:string): Date {
        var splitData = data.split("/");
        var splitHora = hora.split(":");

        let dataString = splitData[2] + "-" + splitData[1] + "-" + splitData[0] + " " + splitHora[0] + ":" + splitHora[1];

        return new Date(dataString);
    }
}