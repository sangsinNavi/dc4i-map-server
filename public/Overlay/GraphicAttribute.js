export class OvrAttributeBase {
    constructor(id, source) {
        this.layerInfo = {};
        this.setId(id);
        this.setSource(source);
        this.layerInfo.layout = {};
        this.layerInfo.paint = {};
    }

    getLayerInfo() {
        return this.layerInfo;
    }

    getLayoutProperty() {
        return this.layerInfo.layout;
    }

    setId(id) {
        this.layerInfo.id = id;
    }

    getId() {
        return this.layerInfo.id;
    }

    setType(type) {
        this.layerInfo.type = type;
    }

    getType() {
        return this.layerInfo.type;
    }

    setSource(source) {
        this.layerInfo.source = source;
    }

    getSource() {
        return this.layerInfo.source;
    }
}

export class OvrAttributeFill extends OvrAttributeBase{
    constructor(id, source) {
        super(id, source);
        super.setType('fill');
        this.layerInfo.layout = {
            'visibility': 'visible',
        };
        this.layerInfo.paint = {
            'fill-antialias': true,
            'fill-color': '#000000',
            'fill-opacity': 1,
        }
    }

    setFillSortKey(ndx) {
        this.layerInfo.layout = {
            ...this.layerInfo.layout,
            'fill-sort-key': ndx
        }
    }

    setFillVisibility(visible) {
        this.layerInfo.layout = {
            ...this.layerInfo.layout,
            'visibility': visible
        }
    }

    setFillAntialias(antialias) {
        this.layerInfo.paint = {
            ...this.layerInfo.paint,
            'fill-antialias': antialias
        }
    }

    setFillColor(color) {
        this.layerInfo.paint = {
            ...this.layerInfo.paint,
            'fill-color': color
        }
    }

    setFillOpacity(opacity) {
        this.layerInfo.paint = {
            ...this.layerInfo.paint,
            'fill-opacity': opacity
        }
    }

    setFillOutlineColor(color) {
        this.layerInfo.paint = {
            ...this.layerInfo.paint,
            'fill-outline-color': color,
            'fill-antialias': true, // outlineColor 활성화시 antialias 활성화 필요
        }
    }

    setFillPattern(patternImageSourceId) {
        this.layerInfo.paint = {
            ...this.layerInfo.paint,
            'fill-pattern': patternImageSourceId
        }
    }

    setFillTranslate(translate) {
        this.layerInfo.paint = {
            ...this.layerInfo.paint,
            'fill-translate': translate // [x,y]
        }
    }

    setFillTranslateAnchor(anchor) {
        this.layerInfo.paint = {
            ...this.layerInfo.paint,
            'fill-translate-anchor': anchor // 'map' or 'viewport
        }
    }
}

export class OvrAttributeLine extends OvrAttributeBase{
    constructor(id, source) {
        super(id, source);
        super.setType('fill');
        this.layerInfo.layout = {
            'visibility': 'visible',
        };
        this.layerInfo.paint = {
            'line-color': '#000000',
            'line-opacity': 1,
        }
    }
    
    // 'butt', 'round', 'square'
    setLineCap(cap) {
        this.layerInfo.layout = {
            ...this.layerInfo.layout,
            'line-cap': cap, 
        }
    }

    // 'bevel', 'round', 'miter'
    setLineJoin(join) {
        this.layerInfo.layout = {
            ...this.layerInfo.layout,
            'line-join': join, 
        }
    }

    setLineMiterLimit(miterLimit) {
        this.layerInfo.layout = {
            ...this.layerInfo.layout,
            'line-miter-limit': miterLimit,
        }
    }

    setLineRoundLimit(roundLimit) {
        this.layerInfo.layout = {
            ...this.layerInfo.layout,
            'line-round-limit': roundLimit,
        }
    }

    setLineSortKey(sortKey) {
        this.layerInfo.layout = {
            ...this.layerInfo.layout,
            'line-sort-key': sortKey,
        }
    }

    // 'visible', 'none'
    setLineVisiblity(visibility) {
        this.layerInfo.layout = {
            ...this.layerInfo.layout,
            'visibility': visibility,
        }
    }

    setLineBlur(blur) {
        this.layerInfo.paint = {
            ...this.layerInfo.paint,
            'line-blur': blur,
        }
    }

    setLineColor(color) {
        this.layerInfo.paint = {
            ...this.layerInfo.paint,
            'line-color': color,
        }
    }

    setLineDasharray(dasharray) {
        this.layerInfo.paint = {
            ...this.layerInfo.paint,
            'line-dasharray': dasharray,
        }
    }
}