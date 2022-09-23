function tablas(num, inicio, fin, ciclo) {
    console.log("La tabla del "+num+" desde el "+inicio+" hasta el "+fin+" es:\n")
    switch(ciclo) {
        case "for": {
            for(i = inicio; i<=fin; i++) console.log(num+" x "+i+" = "+(num*i)+"\n");
            break;
        }
        case "while":{
            j=inicio;
            while(j<=fin) {
                console.log(num+" x "+j+" = "+(num*j)+"\n");
                j++;
            }
            break;
        }
        case "do-while":{
            k=inicio;
            do {
                console.log(num+" x "+k+" = "+(num*k)+"\n");
                k++;
            } while(k<=fin);
            break;
        }
    }
}

tablas(2, 3, 14, "for");