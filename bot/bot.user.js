// ==UserScript==
// @name         MengoPixel BOT
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Cliente do bot MengoPixel.
// @author       Apparatus, enigê
// @updateURL    https://raw.githubusercontent.com/sc00p3/mengo-pixel/master/bot/bot.user.js
// @downloadURL  https://raw.githubusercontent.com/sc00p3/mengo-pixel/master/bot/bot.user.js
// @match        *://pixelzone.io/*
// @match        *://www.pixelzone.io/*
// @grant        unsafeWindow
// ==/UserScript==

const _0x4b6f = [
    'U3RvcA==',
    'cmFuZG9t',
    'Y3Jvc3NPcmlnaW4=',
    '_0xd18f60',
    'toUpperCase',
    'LCA=',
    'Y2FudmFz',
    'title',
    'dGVtcGxhdGU=',
    'then',
    'IFtQbGFjZWRdIA==',
    '_0x294f2e',
    'body',
    'RXJyb3IhIHdyb25nIGNvbG9ycyBpbiB0ZW1wbGF0ZSE=',
    'split',
    'script',
    'value',
    'innerText',
    'floor',
    'slice',
    'Q2FwdGNoYSB8IE1lbmdvUGl4ZWwgQk9U',
    'c3RhcnRzdG9w',
    'UGFyYWRvIHwgTWVuZ29QaXhlbCBCT1Q=',
    'YmFpeG9jaW1h',
    'onclick',
    'src',
    'bm9uZQ==',
    'VGVybWluYWRvIHwgTWVuZ29QaXhlbCBCT1Q=',
    'MmQ=',
    'IHwgTWVuZ29QaXhlbCBCT1Q=',
    'YmVmb3Jlc2NyaXB0ZXhlY3V0ZQ==',
    '_0x5238d8',
    'MzMsMzMsMzM=',
    'OTYsMjMxLDQ1',
    'innerHTML',
    'MjI4LDAsMA==',
    '<option\x20value=\x22',
    'MjU1LDE2MywyMDA=',
    'parentNode',
    'MjMwLDIzMCww',
    'send',
    'aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NjMDBwMy9tZW5nby1waXhlbC9tYXN0ZXIvdGVtcGxhdGVzLw==',
    'Um9kYW5kbyB8IE1lbmdvUGl4ZWwgQk9U',
    'MCwxOTAsMA==',
    'MCwyMzAsMjMw',
    'setAttribute',
    'replaceChild',
    'preventDefault',
    'MTI4LDEyOCwxMjg=',
    'addEventListener',
    'c2NyaXB0IGRldGVjdGVkOg==',
    'U3RhcnQ=',
    'random',
    'MCwxOTIsMA==',
    'MCwwLDIzNQ==',
    'parse',
    'height',
    'MzgsMzgsMzg=',
    'PC9vcHRpb24+',
    'open',
    'MA==',
    'getContext',
    'SW5pY2lhbmRvIHwgTWVuZ29QaXhlbCBCT1Q=',
    'MTUwLDIzMCw3MA==',
    'R0VU',
    'MjA3LDExNSwyMzA=',
    '_0x4eac91',
    'aHR0cHM6Ly9zYzAwcDMuZ2l0aHViLmlvL21lbmdvcGl4ZWwvYm90L2J1bmRsZTIuanM=',
    'getElementById',
    'createElement',
    'MjU1LDI1NSwyNTU=',
    'YW5vbnltb3Vz',
    'data',
    'ceil',
    'PG1ldGEgY2hhcnNldD0idXRmLTgiPjxsaW5rIGhyZWY9Imh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1QYWNpZmljbyIgcmVsPSJzdHlsZXNoZWV0Ij48bGluayByZWw9InN0eWxlc2hlZXQiIGhyZWY9Imh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzcyI+PHN0eWxlPi5ncmVjYXB0Y2hhLWJhZGdlLCNtZXNzYWdle2Rpc3BsYXk6IG5vbmUgIWltcG9ydGFudH08L3N0eWxlPjxkaXYgY2xhc3M9InJvdW5kZWQtMCB0ZXh0LWxpZ2h0IHAtMiIgc3R5bGU9ImJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9naXRodWIuY29tL3NjMDBwMy9tZW5nby1waXhlbC9yYXcvbWFzdGVyL21pbmltYXBhL21pbmltYXAtYmFja2dyb3VuZC5wbmcnKTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7IHBvc2l0aW9uOmFic29sdXRlOyByaWdodDo2cHg7IGJvdHRvbTo2cHg7IHotaW5kZXg6MSAiPjxoMyBzdHlsZT0iZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsiPk1lbmdvUGl4ZWwgQk9UPC9oMz48c2VsZWN0IGNsYXNzPSJmb3JtLWNvbnRyb2wgcm91bmRlZC0wIiBpZD0idGVtcGxhdGUiPjxvcHRpb24gdmFsdWU9IjAiPlRlbXBsYXRlPC9vcHRpb24+PC9zZWxlY3Q+PHNlbGVjdCBjbGFzcz0iZm9ybS1jb250cm9sIHJvdW5kZWQtMCIgaWQ9ImVzdHJhdGVnaWEiPjxvcHRpb24gdmFsdWU9InJhbmRvbSI+UmFuZG9tPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0iY2ltYWJhaXhvIj5DaW1hID4gQmFpeG88L29wdGlvbj48b3B0aW9uIHZhbHVlPSJiYWl4b2NpbWEiPkJhaXhvID4gQ2ltYTwvb3B0aW9uPjwvc2VsZWN0PjxidXR0b24gY2xhc3M9InJvdW5kZWQtMCBidG4gYnRuLW91dGxpbmUtbGlnaHQgdy0xMDAiIGlkPSJzdGFydHN0b3AiPkluaWNpYXI8L2J1dHRvbj48L2Rpdj4=',
    'Z3JlY2FwdGNoYS1iYWRnZQ==',
    'push',
    '_0x14f7dd',
    '_0x4415e1',
    'ZXN0cmF0ZWdpYQ==',
    'ZGl2',
    'MCwwLDA=',
    'width',
    'MjI5LDAsMA==',
    '_0x1aa607',
    'length',
    '_0x453ec0',
    'onload',
    'buffer',
    'charAt',
    'MTUzLDk4LDYx',
    '_0x2707e9',
    'log',
    'responseText',
    'reverse'
];
(function (_0x4520f7, _0x4b6f6b) {
    const _0x5acdf3 = function (_0x294f2e) {
        while (--_0x294f2e) {
            _0x4520f7['push'](_0x4520f7['shift']());
        }
    };
    _0x5acdf3(++_0x4b6f6b);
}(_0x4b6f, 0x11b));
const _0x5acd = function (_0x4520f7, _0x4b6f6b) {
    _0x4520f7 = _0x4520f7 - 0x0;
    let _0x5acdf3 = _0x4b6f[_0x4520f7];
    return _0x5acdf3;
};
const _0x2c53f1 = _0x5acd;
window[_0x2c53f1('0x33')](atob(_0x2c53f1('0x20')), function (_0x4f6f15) {
    const _0x506f14 = _0x2c53f1;
    if (console[_0x506f14('0x5e')](atob(_0x506f14('0x34')), originalScript[_0x506f14('0x1b')]), originalScript[_0x506f14('0x1b')] === atob('aHR0cHM6Ly9waXhlbHpvbmUuaW8vY2xpZW50L2pzL2J1bmRsZS5qcz8z')) {
        var _0x2826ed = document[_0x506f14('0x47')](_0x506f14('0x11'));
        _0x2826ed[_0x506f14('0x1b')] = atob(_0x506f14('0x45')), originalScript[_0x506f14('0x28')][_0x506f14('0x30')](_0x2826ed, originalScript), _0x4f6f15[_0x506f14('0x31')]();
    }
});
var _0x658b78 = document[_0x2c53f1('0x47')](atob(_0x2c53f1('0x52')));
_0x658b78[_0x2c53f1('0x24')] = atob(_0x2c53f1('0x4c')), document[_0x2c53f1('0xe')]['appendChild'](_0x658b78);
var _0x2a40be = document['getElementsByClassName'](atob(_0x2c53f1('0x4d')));
_0x2a40be[0x0] && (_0x2a40be[0x0]['style']['display'] = atob(_0x2c53f1('0x1c'))), document[_0x2c53f1('0x9')] = atob('UGFyYWRvIHwgTWVuZ29QaXhlbCBCT1Q=');
var _0x430a75, _0x2a46df, _0x5991b0, _0x5e416f = [], _0x2e60ad = [], _0x150400 = [], _0x336571 = !0x1, _0x341d37 = document[_0x2c53f1('0x46')](atob(_0x2c53f1('0x17')));
function _0x3d9965(_0x54208a) {
    const _0xde945 = _0x2c53f1;
    !function () {
        const _0x3831ac = _0x5acd;
        var _0x3c0e33 = new XMLHttpRequest();
        _0x3c0e33[_0x3831ac('0x3d')](atob(_0x3831ac('0x42')), atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NjMDBwMy9tZW5nby1waXhlbC9tYXN0ZXIvdGVtcGxhdGVzLmpzb24='), !0x1), _0x3c0e33[_0x3831ac('0x2a')](null), _0x5e416f = JSON[_0x3831ac('0x39')](_0x3c0e33[_0x3831ac('0x0')]);
        var _0x54c65c = document[_0x3831ac('0x46')](atob(_0x3831ac('0xa')));
        for (var _0x2a9ebe in _0x5e416f)
            _0x54c65c[_0x3831ac('0x24')] = _0x54c65c[_0x3831ac('0x24')] + _0x3831ac('0x26') + _0x5e416f[_0x2a9ebe]['name'] + '\x22>' + _0x2a9ebe + atob(_0x3831ac('0x3c'));
    }(), this['_0x294f2e'] = function (_0x215fe3) {
        return new Promise(_0x40fdef => {
            const _0x4056f5 = _0x5acd;
            var _0x169510 = new Image();
            _0x169510[_0x4056f5('0x59')] = function () {
                const _0x5e536b = _0x4056f5;
                let _0x4ec2b8 = document['createElement'](atob(_0x5e536b('0x8')));
                _0x4ec2b8[_0x5e536b('0x54')] = _0x169510['width'], _0x4ec2b8[_0x5e536b('0x3a')] = _0x169510[_0x5e536b('0x3a')];
                let _0x3ff5ba = _0x4ec2b8[_0x5e536b('0x3f')](atob(_0x5e536b('0x1e')));
                _0x3ff5ba['drawImage'](_0x169510, 0x0, 0x0);
                let _0x2cdece = _0x3ff5ba['getImageData'](0x0, 0x0, _0x4ec2b8[_0x5e536b('0x54')], _0x4ec2b8[_0x5e536b('0x3a')]);
                _0x40fdef(_0x2cdece[_0x5e536b('0x4a')][_0x5e536b('0x5a')]);
            }, _0x169510[_0x4056f5('0x2f')](atob(_0x4056f5('0x4')), atob(_0x4056f5('0x49'))), _0x169510[_0x4056f5('0x1b')] = atob(_0x4056f5('0x2b')) + _0x215fe3;
        });
    }, this[_0xde945('0x21')] = function (_0x2634db) {
        return new Promise(_0x25f0b6 => {
            const _0x330d96 = _0x5acd;
            let _0x11eb7e = new Uint8ClampedArray(_0x2634db), _0x5bbc41 = [], _0x303c7f = 0x0;
            for (; _0x303c7f < _0x11eb7e['length']; _0x303c7f += 0x4) {
                const _0x440971 = _0x11eb7e[_0x303c7f], _0x3db98d = _0x11eb7e[_0x303c7f + 0x1], _0x112923 = _0x11eb7e[_0x303c7f + 0x2], _0x54f1e0 = _0x11eb7e[_0x303c7f + 0x3];
                _0x5bbc41[_0x330d96('0x4e')]([
                    _0x440971,
                    _0x3db98d,
                    _0x112923,
                    _0x54f1e0
                ]);
            }
            _0x25f0b6(_0x5bbc41);
        });
    }, this[_0xde945('0x58')] = function () {
        return new Promise(_0x295581 => {
            const _0x23d4c7 = _0x5acd;
            let _0x100546 = [], _0x1181ad = 0x0;
            for (let _0x20ac71 = 0x0; _0x20ac71 < _0x2a46df[_0x23d4c7('0x3a')]; _0x20ac71++)
                for (let _0x4b1997 = 0x0; _0x4b1997 < _0x2a46df[_0x23d4c7('0x54')]; _0x4b1997++) {
                    let _0x20c7be = unsafeWindow[_0x23d4c7('0x5')](_0x2a46df['x'] + _0x4b1997, _0x2a46df['y'] + _0x20ac71);
                    if (0xff == _0x2e60ad[_0x1181ad][0x3]) {
                        let _0x154cb9 = this['_0x4eac91'](_0x2e60ad[_0x1181ad][0x0] + ',' + _0x2e60ad[_0x1181ad][0x1] + ',' + _0x2e60ad[_0x1181ad][0x2]);
                        _0x154cb9 != _0x20c7be && -0x1 != _0x154cb9 && _0x100546[_0x23d4c7('0x4e')]({
                            'x': 0x1 * _0x2a46df['x'] + 0x1 * _0x4b1997,
                            'y': 0x1 * _0x2a46df['y'] + 0x1 * _0x20ac71,
                            'c': _0x154cb9
                        });
                    }
                    _0x1181ad++;
                }
            _0x295581(_0x100546);
        });
    }, this['_0x518b22'] = async function (_0x219481, _0x1c01ca, _0x321494) {
        const _0x5ab1bb = _0xde945;
        _0x336571 = !0x1, unsafeWindow[_0x5ab1bb('0x56')](_0x219481, _0x1c01ca, _0x321494), document[_0x5ab1bb('0x9')] = atob('W1dQXSA=') + _0x150400['length'] + atob(_0x5ab1bb('0xc')) + _0x219481 + atob(_0x5ab1bb('0x7')) + _0x1c01ca + atob(_0x5ab1bb('0x7')) + _0x321494 + atob(_0x5ab1bb('0x1f'));
    }, this[_0xde945('0x5d')] = function () {
        const _0x4e7e70 = _0xde945;
        _0x430a75 && (this[_0x4e7e70('0x50')](), setTimeout(async () => {
            const _0x150ac3 = _0x4e7e70;
            if (0x0 == _0x150400[_0x150ac3('0x57')])
                this[_0x150ac3('0x58')]()[_0x150ac3('0xb')](_0x21e4fb => {
                    const _0x1d694e = _0x150ac3;
                    0x0 == (_0x150400 = _0x21e4fb)[_0x1d694e('0x57')] ? (document[_0x1d694e('0x9')] = atob(_0x1d694e('0x1d')), _0x430a75 = !_0x430a75, document[_0x1d694e('0x46')](atob(_0x1d694e('0x17')))[_0x1d694e('0x13')] = atob(_0x1d694e('0x35'))) : this['_0x2707e9']();
                });
            else if (_0x150400[_0x150ac3('0x57')] > 0x0 && !unsafeWindow[_0x150ac3('0x4f')]) {
                _0x336571 = !0x1;
                for (const _0x3b60fa of _0x150400) {
                    var _0x5ba0cb, _0x29b8ef, _0x6f1ce3;
                    let _0x37021a = _0x150400[0x0];
                    if (_0x5ba0cb = _0x37021a['x'], _0x29b8ef = _0x37021a['y'], _0x6f1ce3 = _0x37021a['c'], _0x150400 = _0x150400[_0x150ac3('0x15')](0x1), unsafeWindow['_0xd18f60'](_0x5ba0cb, _0x29b8ef) != _0x6f1ce3) {
                        await this['_0x518b22'](_0x5ba0cb, _0x29b8ef, _0x6f1ce3), this[_0x150ac3('0x5d')]();
                        break;
                    }
                }
            } else if (unsafeWindow['_0x14f7dd'] && !_0x336571) {
                document[_0x150ac3('0x9')] = atob(_0x150ac3('0x16')), new Audio(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NjMDBwMy9tZW5nby1waXhlbC9tYXN0ZXIvY2FwdGNoYS5tcDM='))['play'](), _0x336571 = !0x0, this[_0x150ac3('0x5d')]();
            } else
                this[_0x150ac3('0x5d')]();
        }, 0xbb8 + _0x3d471d(0xc8, 0x1f4)));
    }, this[_0xde945('0x50')] = function () {
        const _0x46185a = _0xde945;
        switch (_0x5991b0) {
        case atob(_0x46185a('0x3')):
            _0x150400 = _0x150400['sort'](() => 0.5 - Math[_0x46185a('0x36')]());
            break;
        case atob('Y2ltYWJhaXhv'):
            _0x150400 = _0x150400;
            break;
        case atob(_0x46185a('0x19')):
            _0x150400 = _0x150400[_0x46185a('0x1')]();
        }
    }, this[_0xde945('0x44')] = function (_0x4f3bc4) {
        const _0xc6d082 = _0xde945;
        switch (_0x4f3bc4) {
        case atob(_0xc6d082('0x53')):
            return 0x1;
        case atob(_0xc6d082('0x3b')):
        case atob(_0xc6d082('0x22')):
            return 0x0;
        case atob(_0xc6d082('0x32')):
            return 0x2;
        case atob(_0xc6d082('0x48')):
            return 0x3;
        case atob(_0xc6d082('0x5c')):
            return 0x4;
        case atob(_0xc6d082('0x27')):
            return 0x5;
        case atob(_0xc6d082('0x43')):
            return 0x6;
        case atob('MTI4LDAsMTI4'):
            return 0x7;
        case atob(_0xc6d082('0x55')):
        case atob(_0xc6d082('0x25')):
            return 0x8;
        case atob('MjI5LDEzNyww'):
        case atob('MjU1LDEzOCww'):
            return 0x9;
        case atob('MjI5LDIyOSww'):
        case atob(_0xc6d082('0x29')):
            return 0xa;
        case atob(_0xc6d082('0x41')):
        case atob(_0xc6d082('0x23')):
            return 0xb;
        case atob(_0xc6d082('0x2d')):
        case atob(_0xc6d082('0x37')):
            return 0xc;
        case atob(_0xc6d082('0x2e')):
        case atob('MSwyMzAsMjMw'):
            return 0xd;
        case atob('MCwxMzYsMjA0'):
        case atob('MCwxMzYsMjA3'):
            return 0xe;
        case atob('MCwwLDIzMA=='):
        case atob(_0xc6d082('0x38')):
            return 0xf;
        default:
            return console[_0xc6d082('0x5e')](atob(_0xc6d082('0xf'))), -0x1;
        }
    };
}
var _0x3d9274 = new _0x3d9965(0x0);
function _0x3d471d(_0xd1b06e, _0x3f4148) {
    const _0x32e5c8 = _0x2c53f1;
    return _0xd1b06e = Math[_0x32e5c8('0x4b')](_0xd1b06e), _0x3f4148 = Math[_0x32e5c8('0x14')](_0x3f4148), Math[_0x32e5c8('0x14')](Math['random']() * (_0x3f4148 - _0xd1b06e + 0x1)) + _0xd1b06e;
}
function _0x335bca(_0x271e1d) {
    const _0x1a6af0 = _0x2c53f1;
    return _0x271e1d[_0x1a6af0('0x5b')](0x0)[_0x1a6af0('0x6')]() + _0x271e1d['slice'](0x1);
}
_0x341d37[_0x2c53f1('0x1a')] = function () {
    const _0x4be051 = _0x2c53f1;
    let _0xe22a74 = document[_0x4be051('0x46')](atob(_0x4be051('0xa'))), _0x4b91c2 = document[_0x4be051('0x46')](atob(_0x4be051('0x51')));
    if (_0x430a75)
        _0x430a75 = !0x1, _0x341d37[_0x4be051('0x13')] = atob(_0x4be051('0x35')), document['title'] = atob(_0x4be051('0x18'));
    else {
        if (_0xe22a74[_0x4be051('0x12')] == atob('MA==') || _0x4b91c2 == atob(_0x4be051('0x3e')))
            return;
        _0x430a75 = !0x0, document[_0x4be051('0x9')] = atob(_0x4be051('0x40')), _0x341d37[_0x4be051('0x13')] = atob(_0x4be051('0x2')), _0x3d9274[_0x4be051('0xd')](_0xe22a74[_0x4be051('0x12')])[_0x4be051('0xb')](_0x509c02 => {
            const _0x2bff4b = _0x4be051;
            _0x3d9274[_0x2bff4b('0x21')](_0x509c02)[_0x2bff4b('0xb')](_0x54619d => {
                const _0x3759a2 = _0x2bff4b;
                _0x2e60ad = _0x54619d, _0x2a46df = _0x5e416f[_0x335bca(_0xe22a74[_0x3759a2('0x12')][_0x3759a2('0x10')]('.')[0x0])], _0x3d9274[_0x3759a2('0x58')]()[_0x3759a2('0xb')](_0x3d8c0d => {
                    const _0x494f41 = _0x3759a2;
                    0x0 == (_0x150400 = _0x3d8c0d)[_0x494f41('0x57')] ? (_0x430a75 = !_0x430a75, document['title'] = atob(_0x494f41('0x1d')), _0x341d37[_0x494f41('0x13')] = atob('U3RhcnQ=')) : (_0x5991b0 = _0x4b91c2[_0x494f41('0x12')], document[_0x494f41('0x9')] = atob(_0x494f41('0x2c')), _0x3d9274[_0x494f41('0x5d')]());
                });
            });
        });
    }
};