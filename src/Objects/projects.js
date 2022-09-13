export const fsp = [
  {
    n: "Etymologenie",
    f: "etym",
    t: [
      "React",
      "TailwindCSS",
      "Flask",
      "FlaskSessions",
      "MongoDB",
      "Redis Cache",
      "Heroku",
      "Gunicorn",
    ],
    g: process.env.REACT_APP_GITHUB + "/etymologenie",
    s: "http://www.etymologenie.com",
  },
  {
    n: "Solana la Vella",
    t: ["VueJS", "GoLang", "Solana Blockchain"],
    g: process.env.REACT_APP_GITHUB + "/SolanalaVella",
    s: null,
  },
];

export const dsp = [
  {
    n: "PyTorch WebCam",
    t: ["IPYNB", "PyTorch", "Matplotlib", "SciPy"],
    g: process.env.REACT_APP_GITHUB + "/PythonWithPytorchWebCam'",
    s: null,
  },
  {
    n: "Agglomerative Clustering",
    t: ["Vanilla Python"],
    g: process.env.REACT_APP_GITHUB + "/AggloHierarchicalClustering'",
    s: null,
  },
  {
    n: "Jaccard Validation",
    t: ["Vanilla Python"],
    g: process.env.REACT_APP_GITHUB + "/NMIandJaccardValidation",
    s: null,
  },
  {
    n: "Naive Bayes Classifier",
    t: ["Numpy"],
    g: process.env.REACT_APP_GITHUB + "/NaiveBayesClassifierZoo",
    s: null,
  },
  {
    n: "DecisionTree",
    t: ["Numpy"],
    g: process.env.REACT_APP_GITHUB + "/DecisionTree",
    s: null,
  },
];

export const both = [...fsp, ...dsp];
