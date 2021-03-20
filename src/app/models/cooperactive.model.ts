import * as moment from 'moment';

export class Cooperactive {
    id                : number;
    name               : string;
    founderId  ?        : number;
    passCode   ?        : string;
    descResume         : string;    
    mision      ?       : string;
    vision             : string;
    description  ?      : string;
    searchedTalents?    : number[];
    members        ?    : number[];
    industryId      ?   : number;
    infoImportante ?    : string;
    statusId         ?  : number;
    global ?           : boolean;
    paises ?            : number[];
    ciudades ?          : number[];
    created?           : Date;
    lastActivity?      : Date;
    picture?           : any;
    localidadId?       : number;
    adresslocationId?  : number;
    adressStreet?      : string;
    adressHouseNumber? : string;
    adressFloor?       : string;
    adressApartment?   : string;
    phoneMobile?       : number;
    facebook?          : string;
    instagram?         : string;
    twitter?           : string;
}

/*
id                 INT
dni                INT
username           VARCHAR(100)
email              VARCHAR(100)
userStatusId       INT
localidadId        INT
role               INT
jobId              INT
studiesId          INT
isModerator        TINYINT(4)
status             VARCHAR(100)
password           VARCHAR(100)
firstName          VARCHAR(100)
lastName           VARCHAR(100)
birthDate          TIMESTAMP
created            TIMESTAMP
lastActivity       TIMESTAMP
afiliated          TINYINT
picture            BLOB
adressStreet       VARCHAR(100)
adressHouseNumber  VARCHAR(100)
adresslocationId   INT
phoneMobile        INT
phoneLandline      INT
militancyGroupId   INT
facebook           VARCHAR(100)
instagram          VARCHAR(100)
twitter            VARCHAR(100)
*/