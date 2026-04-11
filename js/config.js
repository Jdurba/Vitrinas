// ==========================================
// CONFIGURACIÓN GLOBAL
// ==========================================
const CONFIG = {
    precios: {
        Tirador_126x35: 7.62,
        Tirador_37x16: 5.25,
        bisagra_extra: 5.00
    },
    bisagras_rangos: [
        { hasta: 900,  num: 2 },
        { hasta: 1600, num: 3 },
        { hasta: 2000, num: 4 },
        { hasta: 2500, num: 5 },
        { hasta: 2800, num: 6 }
    ],
    bisagras_B1_defecto: 100,
    bisagras_B2_defecto: 100,
    bisagras_B_minimo:    70,
    bisagras_C_minimo:    80,
    bisagras_max_global:   6,
    modelos: {
        '7991':   { nombre: '20x45 P8',      maxAltura: 2400, maxAncho: 700, Minimo: 150, imagen: '7991',   acabados: ['PM','P','B','BM03','NM','RB','NG'] },
        '7994':   { nombre: '20x45 P4',      maxAltura: 2400, maxAncho: 700, Minimo: 150, imagen: '7994',   acabados: ['PM','P','B','NM'] },
        '7995':   { nombre: '35x45 P8',      maxAltura: 2800, maxAncho: 700, Minimo: 150, imagen: '7995',   acabados: ['PM','P','B','BM03','NM'] },
        '7990':   { nombre: '20x45 P20',     maxAltura: 2400, maxAncho: 700, Minimo: 150, imagen: '7990',   acabados: ['PM','P','B','NM'] },
        '7998':   { nombre: '20x45 P45',     maxAltura: 2400, maxAncho: 700, Minimo: 150, imagen: '7998',   acabados: ['PM','P','B','NM','RB'] },
        '7993':   { nombre: '19x21',         maxAltura: 2400, maxAncho: 600, Minimo: 150, imagen: '7993',   acabados: ['PM','P','B','NM','RB','NG'] },
        '7996':   { nombre: '20x18 P8',      maxAltura: 2400, maxAncho: 600, Minimo: 150, imagen: '7996',   acabados: ['PM','P','B','NM','RB','NG'] },
        '7999':   { nombre: '16x60 S/P',     maxAltura: 2400, maxAncho: 700, Minimo: 150, imagen: '7999',   acabados: ['PM','P','B','NM'] },
        '79916':  { nombre: '20x56 C/P',     maxAltura: 2400, maxAncho: 700, Minimo: 150, imagen: '79916',  acabados: ['PM','P','B','NM'] },
        'BT100':  { nombre: 'Perfil BT100',  maxAltura: 2600, maxAncho: 700, Minimo: 150, imagen: 'BT100',  acabados: ['PM','P','B','NM'] },
        'BT110':  { nombre: 'Perfil BT110',  maxAltura: 2700, maxAncho: 700, Minimo: 150, imagen: 'BT110',  acabados: ['PM','P','B','NM'] },
        'KABI':   { nombre: 'Perfiles KABI', maxAltura: 2400, maxAncho: 900, Minimo: 150, imagen: 'Kabi',   acabados: ['BM03','NM','BR'], bisagras_fijas: 2 },
        'HAVA':   { nombre: 'Perfiles HAVA', maxAltura: 2400, maxAncho: 900, Minimo: 150, imagen: 'Hava',   acabados: ['BM03','NM','BR'], bisagras_fijas: 2 },
        'HAVASP': { nombre: 'HAVA S/P',      maxAltura: 2400, maxAncho: 900, Minimo: 150, imagen: 'HavaSP', acabados: ['BM03','NM','BR'], bisagras_fijas: 2 }
    },
    acabados: {
        'PM':   { nombre: 'Plata Mate (A.PM)' },
        'P':    { nombre: 'Plata Brillo (A.P)' },
        'B':    { nombre: 'Lacado Blanco Brillo (L.B)' },
        'BM03': { nombre: 'Blanco Mate 9003 (L.BM03)' },
        'NM':   { nombre: 'Lacado Negro Mate (L.NM)' },
        'BR':   { nombre: 'Bronce Cepillado (A.BR)' },
        'RB':   { nombre: 'Chapa Roble (C.RB)' },
        'NG':   { nombre: 'Chapa Nogal (C.NG)' }
    },
    tiradores: {
        '126x35': {
            nombre: 'Tirador 126x35',
            medidas: '126 × 35 mm',
            imagen: 'https://raw.githubusercontent.com/Jdurba/Vitrinas/main/Imagenes/126x35.jpg'
        },
        '37x16': {
            nombre: 'Tirador 37x16',
            medidas: '37 × 16 mm',
            imagen: 'https://raw.githubusercontent.com/Jdurba/Vitrinas/main/Imagenes/37x16.jpg'
        }
    }
};
