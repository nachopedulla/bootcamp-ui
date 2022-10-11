const FROM = 'FROM <TABLE> <ALIAS>\n';
const SELECT = `SELECT <COLUMNS>\n${FROM}`;
const WHERE = 'WHERE <COLUMN> <OPERATION> <VALUE>\n';
const JOIN = 'JOIN <TABLE> <ALIAS>\nON <COLUMN> = <COLUMN>\n';
const GROUP = 'GROUP BY <COLUMN>\n';
const ORDER = 'ORDER BY <COLUMN> <DESC>\n'

const BASE_SELECT = `${SELECT}${WHERE}`;
const SELECT_WITH_GROUP = `${SELECT}${GROUP}`
const SELECT_WITH_ORDER = `${SELECT}${ORDER}`;
const SELECT_WITH_GROUP_ORDER = `${SELECT}${WHERE}${GROUP}${ORDER}`
const SELECT_WITH_JOIN = `${SELECT}${JOIN}${WHERE}`;
const SELECT_WITH_JOIN_GROUP = `${SELECT_WITH_JOIN}${GROUP}`
const SELECT_WITH_JOIN_ORDER = `${SELECT_WITH_JOIN}${ORDER}`;
const SELECT_WITH_JOIN_GROUP_ORDER = `${SELECT_WITH_JOIN_GROUP}${ORDER}`
const SELECT_SUBSELECT = `SELECT (\n\tSELECT <COLUMN>\n\t${FROM}\t${WHERE}) <AS NAME>\n${FROM}${WHERE}`

const DB_COLLECTION = 'db.<collection>'

const TEMPLATES = {
    SQL: {
        'SELECT': BASE_SELECT,
        'SELECT - GROUP': SELECT_WITH_GROUP,
        'SELECT - ORDER': SELECT_WITH_ORDER,
        'SELECT - GROUP - ORDER': SELECT_WITH_GROUP_ORDER,
        'SELECT - JOIN': SELECT_WITH_JOIN,
        'SELECT - JOIN - GROUP': SELECT_WITH_JOIN_GROUP,
        'SELECT - JOIN - ORDER': SELECT_WITH_JOIN_ORDER,
        'SELECT - JOIN - GROUP - ORDER': SELECT_WITH_JOIN_GROUP_ORDER,
        'SELECT - SUB SELECT': SELECT_SUBSELECT
    },
    MongoDB: {
        'find' : `${DB_COLLECTION}.find({\n\t<attribute>: <value>\n})`,
        'findOne' : `${DB_COLLECTION}.findOne({\n\t<attribute>: <value>\n})`,
        'find count': `${DB_COLLECTION}.find({\n\t<attribute>: <value>\n}).count()`,
        'find ne' : `${DB_COLLECTION}.find({\n\t<attribute>: {"$ne": <value>}\n})`,
        'find lt' : `${DB_COLLECTION}.find({\n\t<attribute>: {"$lt": <value>}\n})`,
        'find gt' : `${DB_COLLECTION}.find({\n\t<attribute>: {"$gt": <value>}\n})`,
        'find lte' : `${DB_COLLECTION}.find({\n\t<attribute>: {"$lte": <value>}\n})`,
        'find gte' : `${DB_COLLECTION}.find({\n\t<attribute>: {"$gte": <value>}\n})`,
        'find nested document': `${DB_COLLECTION}.find({\n\t<attribute>.<attribute>: <value>\n})`,
        'find nested array': `${DB_COLLECTION}.find({\n\t<attribute>.<index>.<attribute>: <value>\n})`,
        'find projection': `${DB_COLLECTION}.find({\n\t{<expression>},\n\t{<attribute>: <0 - 1>}\n})`,
        'aggregate': `${DB_COLLECTION}.aggregate([\n\t{ $match: {<expression>} }\n])`,
        'aggregate project': `${DB_COLLECTION}.aggregate([\n\t{ $match: {<expression>} },\n\t{ $project: {<attribute>: <0 - 1>} }\n])`,
        'aggregate project group': `${DB_COLLECTION}.aggregate([\n\t{ $match: {<expression>} },\n\t{ $project: {<attribute>: <0 - 1>} }\n\t{ $group: {<name>: <attribute value>} }\n])`,
        'expressive': `${DB_COLLECTION}.find({\n\t{ “$expr”: {<operation>: [<valaue>, <value>] }\n})`,
        'elemMatch': `${DB_COLLECTION}.find({\n\t<array>: {\n\t\t“$elemMatch”: {<attribute>: <value>} \n\t}\n})`
    }
}

export default TEMPLATES;