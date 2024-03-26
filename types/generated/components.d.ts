import type { Schema, Attribute } from '@strapi/strapi';

export interface LinkLinkData extends Schema.Component {
  collectionName: 'components_link_link_data';
  info: {
    displayName: 'link_data';
    icon: 'bulletList';
  };
  attributes: {
    link_text: Attribute.String & Attribute.Required;
    link_url: Attribute.String & Attribute.Required;
  };
}

export interface LinkLogoMeno extends Schema.Component {
  collectionName: 'components_link_logo_menos';
  info: {
    displayName: 'logo_meno';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    img: Attribute.Media;
    link_url: Attribute.Text & Attribute.Required;
  };
}

export interface LinkMenu extends Schema.Component {
  collectionName: 'components_link_menus';
  info: {
    displayName: 'menu';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    logo: Attribute.Component<'link.logo-meno'> & Attribute.Required;
    link: Attribute.Component<'link.link-data', true> & Attribute.Required;
  };
}

export interface SectionImgGrid extends Schema.Component {
  collectionName: 'components_section_img_grids';
  info: {
    displayName: 'img_grid';
    icon: 'picture';
  };
  attributes: {
    img: Attribute.Media & Attribute.Required;
  };
}

export interface SectionSectionGrid extends Schema.Component {
  collectionName: 'components_section_section_grids';
  info: {
    displayName: 'section_grid';
    icon: 'grid';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    text_grid: Attribute.Component<'section.text-grid', true> &
      Attribute.Required;
    img_grid: Attribute.Component<'section.img-grid', true> &
      Attribute.Required;
    metadata: Attribute.Component<'section.section-premisa'> &
      Attribute.Required;
  };
}

export interface SectionSectionPremisa extends Schema.Component {
  collectionName: 'components_section_section_premisas';
  info: {
    displayName: 'metadata_sobe';
    icon: 'picture';
    description: '';
  };
  attributes: {
    id_title: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 50;
      }>;
    backgroud: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface SectionSectionSobre extends Schema.Component {
  collectionName: 'components_section_section_sobres';
  info: {
    displayName: 'section_sobre';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    descricao: Attribute.Text & Attribute.Required;
    img: Attribute.Media;
    metadata: Attribute.Component<'section.section-premisa'> &
      Attribute.Required;
  };
}

export interface SectionSectionTexto extends Schema.Component {
  collectionName: 'components_section_section_textos';
  info: {
    displayName: 'section_texto';
    icon: 'pencil';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    decription: Attribute.Blocks & Attribute.Required;
    metadata: Attribute.Component<'section.section-premisa'>;
    Table: Attribute.Component<'table.table'>;
  };
}

export interface SectionTextGrid extends Schema.Component {
  collectionName: 'components_section_text_grids';
  info: {
    displayName: 'text_grid';
    icon: 'file';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    descricao: Attribute.Text & Attribute.Required;
  };
}

export interface TableDataColm extends Schema.Component {
  collectionName: 'components_atomo_data_colms';
  info: {
    displayName: 'data_colum';
    icon: 'database';
    description: '';
  };
  attributes: {
    colum_1: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    colum_2: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    colum_3: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    colum_4: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    colum_5: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
  };
}

export interface TableLineTible extends Schema.Component {
  collectionName: 'components_atomo_line_tibles';
  info: {
    displayName: 'line_title';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    colum_1: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    colum_2: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    colum_3: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    colum_4: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    colum_5: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
  };
}

export interface TableTable extends Schema.Component {
  collectionName: 'components_table_tables';
  info: {
    displayName: 'Table';
    icon: 'bulletList';
  };
  attributes: {
    title_tible: Attribute.Component<'table.line-tible', true> &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 1;
        },
        number
      >;
    data_colum_table: Attribute.Component<'table.data-colm', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'link.link-data': LinkLinkData;
      'link.logo-meno': LinkLogoMeno;
      'link.menu': LinkMenu;
      'section.img-grid': SectionImgGrid;
      'section.section-grid': SectionSectionGrid;
      'section.section-premisa': SectionSectionPremisa;
      'section.section-sobre': SectionSectionSobre;
      'section.section-texto': SectionSectionTexto;
      'section.text-grid': SectionTextGrid;
      'table.data-colm': TableDataColm;
      'table.line-tible': TableLineTible;
      'table.table': TableTable;
    }
  }
}
