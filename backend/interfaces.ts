export interface IcorsOption {
  origin: string;
  credentials: boolean;
  optionSuccessStatus: number;
  allowedHeaders: string[];
  methods: string;
}
