

export interface XrefMap {
  references: XrefMapItem[];
}

export interface XrefMapItem {
  uid: string;
  name: string;
  href: string;
}