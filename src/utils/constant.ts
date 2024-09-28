import { DefaultLandmarksType, DefaultVertebraeType } from "./types";

export const PUBLIC_PATH = {
  LOGIN:"/login"
};

export const PRIVATE_PATH = {
  HOME: "/home",
  PROJECTS: "/projects"
}

export const ROUTES_PATH = {
  ...PUBLIC_PATH,
  ...PRIVATE_PATH
};

export const pagePerOptions = [5, 10, 25];
export const limit = 10;

export const storage = {
  set(key: string, value: string | object) {
    if (
      typeof value === "object" ||
      Array.isArray(value) ||
      Number.isInteger(value)
    ) {
      value = JSON.stringify(value);
    }
    const ISSERVER = typeof window === "undefined";
    if (!ISSERVER) localStorage.setItem(key, value);
  },
  get(key: string, defaultValue?: string | null | undefined) {
    let data: string | null = "";
    if (typeof window !== "undefined") {
      // Perform localStorage action
      data = localStorage.getItem(key);
    }

    try {
      let parsed = data ? JSON.parse(data) : null;

      return parsed !== null ? parsed : defaultValue;
    } catch (e) {
      return data !== null ? data : defaultValue;
    }
  },
  remove(key: string) {
    return localStorage.removeItem(key);
  },
  clear() {
    return localStorage.clear();
  },
};

export const toolsType = {
  measure: "measure", 
  nodes: "nodes"
}



export const defaultLandmarksData: DefaultLandmarksType[] = [
  {
    id: "L1",
    extension_coor: [],
    flexion_coor: [],
    extension_img: null,
    flexion_img: null,
    isSave: false
  },
  {
    id: "L2",
    extension_coor: [],
    flexion_coor: [],
    extension_img: null,
    flexion_img: null,
    isSave: false
  },
  {
    id: "L3",
    extension_coor: [],
    flexion_coor: [],
    extension_img: null,
    flexion_img: null,
    isSave: false
  },
  {
    id: "L4",
    extension_coor: [],
    flexion_coor: [],
    extension_img: null,
    flexion_img: null,
    isSave: false
  }
]


// set landmark icon width because its depend on copy extension landmark
export const iconWidth: number = 10;


export const defaultVertebrae: DefaultVertebraeType = {
  id: "",
  vertebrae_type: "",
  dicom_images: [],
  isSave: false,
}

export const defaultVertebraesList: DefaultVertebraeType[] = [
  {
    id: 1,
    vertebrae_type: "L1",
    dicom_images: [],
    isSave: false
  },
  {
    id: 2,
    vertebrae_type: "L2",
    dicom_images: [],
    isSave: false
  },
  {
    id: 3,
    vertebrae_type: "L3",
    dicom_images: [],
    isSave: false
  },
  {
    id: 4,
    vertebrae_type: "L4",
    dicom_images: [],
    isSave: false
  }
]