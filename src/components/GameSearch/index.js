import React, {useState, useEffect} from "react";
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {gql, useQuery} from "@apollo/client";

const graphql = gql`
    query games($gameInput: GameInput){
        games(GameInput: $gameInput) {
            name,
            objectId,
            yearPublished
        }
    }
`;

const GameSearch = ({parentCallback}) => {
    const [options, setOptions] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const {data, refetch, loading} = useQuery(graphql, {
        variables: {
            "gameInput": {
                "name": inputValue
            }
        },
    });

    const {t} = useTranslation();

    useEffect(() => {
        (async () => {
            if (!loading) {
                setOptions(Object.keys(data.games).map((key) => data.games[key]));
            }
        })();
    }, [data, loading]);

    return (
        <Autocomplete
            id="asynchronous-game-search"
            onChange={(event, values) => {
                if (!loading) {
                    console.log("onChange => ", values);
                    parentCallback(values);
                }
            }}
            onInputChange={async (inputValue) => {
                if (inputValue.target.valueOf().value !== 0) {
                    setInputValue(inputValue.target.valueOf().value);
                    await refetch();
                }
            }}
            options={options}
            getOptionLabel={(option) => option.name}
            fullWidth={true}
            renderInput={(params) => (
                <TextField
                    required
                    {...params}
                    label={t('game')}
                    variant="outlined"
                    placeholder={t('search-match-game')}
                    fullWidth={true}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit"
                                                             size={20}/> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
};

export default withRouter(GameSearch);
